import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    type: String,
    example: '9e569cdc819b29ea7b0218f8553fe5aa1dc7be0a1ea2cec2aba2351b1356db52',
  })
  salt: string;

  @ApiProperty({
    type: String,
    example:
      '791c860ac8ac699364b19ea49d12c01d73ec2102a981f9df4fc8b4fab649363f65c496f78727a65643a8aaed8d729498f0dfc1446b3e4b4dfaa0dc23b4556a839126daf27bdc574f40aa4ae22dbcee0e5ee3830f3da7dd753739c09afcbb5b12aafcd5f1961971306775187074357e48ebb6742bd9e296c988453014fa496a9c333e5e7afdaf1860c1c1b80f4b20c0e0d65ae3835187061607c043e5a785a7b3c2c5816b0c6173ad2322814e0237db43f82d8d5ca1cc38d1e85cdd1f986988ec81b032b84cd7f3f9632513992907d15e04a34c0dbb6866d53924dec9892b711b8af172f0ffba982bba492c54d2832ca526beade164022950b84675cf22bded4a',
  })
  serverPublicKey: string;
}
