const fs = require("fs");
const path = require("path");

const hooksDir = path.join(process.cwd(), ".git", "hooks");

const preCommitHook = `#!/bin/sh

# Check for staged files
if git diff --cached --quiet; then
  echo "No staged files to commit. Skipping tests."
  exit 0
fi

# Run linting and formatting for frontend
cd frontend
yarn lint && yarn format
if [ $? -ne 0 ]; then
  echo "Frontend linting/formatting failed. Aborting commit."
  exit 1
fi
cd ..

# Run linting and formatting for backend
cd backend
yarn lint && yarn format
if [ $? -ne 0 ]; then
  echo "Backend linting/formatting failed. Aborting commit."
  exit 1
fi
cd ..
`;

const commitMsgHook = `#!/bin/sh

commit_msg_file=$1
commit_msg=$(cat $commit_msg_file)

# Define regex pattern for conventional commits
conventional_commit_regex="^(feat|fix|docs|style|refactor|perf|test|chore|build|ci|revert|release)(\\(.+\\))?: .{1,}"

if ! echo "$commit_msg" | grep -qE "$conventional_commit_regex"; then
  echo "Invalid commit message format. Please use the conventional commit format."
  exit 1
fi
`;

fs.writeFileSync(path.join(hooksDir, "pre-commit"), preCommitHook);
fs.chmodSync(path.join(hooksDir, "pre-commit"), 0o755);

fs.writeFileSync(path.join(hooksDir, "commit-msg"), commitMsgHook);
fs.chmodSync(path.join(hooksDir, "commit-msg"), 0o755);

console.log("Git hooks have been set up successfully.");
