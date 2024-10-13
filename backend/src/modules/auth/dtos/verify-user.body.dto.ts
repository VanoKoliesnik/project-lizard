import { ApiProperty } from '@nestjs/swagger';

export class VerifyUserBodyDto {
  @ApiProperty({ type: String, example: 'test@test.com' })
  email: string;

  @ApiProperty({
    type: String,
    example: '10db4fd7128e713227a62b304a08961afddea402fc2e8b207b7107591b86b406',
  })
  clientProof: string;

  @ApiProperty({
    type: String,
    example:
      '10d725e4dd92334062745b5877fa6ad447936abc83e59299126e3ddbb514159e6c8d3f68f5e0b3cd583cb3fb16108dbae255170f868470c0250b92d5fc302df8859580dc55a8cc795da8a84a1e0bd3f6ec917d273bcdfb156de130162f4e4624b8b42e98a1730f2414b86f728ab7a645e814dc664f8807b2a13e65e811b316d1b89dde412dde9bbf1c8f93b3d0b9a6d9a35956f04b5fb194528732aadba5584e8c1c8f4c344727807e4214c2fa9546933d9a72026c136f12d0a2bba9140f4f3d1bc18b4e91c11a7fad35de5fbb21765ba9cd5b007a084395bf36b1990959b4669d6354f4fdcf3557e06e92bbba2bc23ad2e315d698855e1a3c80ab83712f8e3e',
  })
  clientPublicKey: string;
}
