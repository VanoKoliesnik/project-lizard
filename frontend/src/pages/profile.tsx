import { ProfileMode } from "@/common/enums";
import { ProfileCard, ProfileCardEditor } from "@/components";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";

export const ProfilePage: React.FC = () => {
  const [mode, setMode] = useState<ProfileMode>(ProfileMode.View);

  return (
    <div>
      <Title level={2}>Profile</Title>

      {mode === ProfileMode.View && <ProfileCard setMode={setMode} />}
      {mode === ProfileMode.Edit && <ProfileCardEditor setMode={setMode} />}
    </div>
  );
};
