import { ApiProperty } from '@nestjs/swagger';

export class VerifyResponseDto {
  @ApiProperty({
    type: String,
    description: 'Use this token for further authorization',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImtvbGVzbmlraXZhbjEwMDJAZ21haWwuY29tZXciLCJpYXQiOjE3Mjg4MzQyODgsImV4cCI6MTcyODkyMDY4OH0.BlDC00cdLHtjpsNiJg8z9w93b7DE_N2yY7HItCHJyYU',
  })
  token: string;

  @ApiProperty({
    type: String,
    example: 'e24c5dbaa1fce5a6dc3715ff8a0a7a019228e6247bfd7756712bf8488d3d8398',
  })
  serverProof: string;
}
