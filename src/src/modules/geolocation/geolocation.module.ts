import { Module } from '@nestjs/common';
import { GeolocationController } from './geolocation.controller';
import { GeolocationService } from './geolocation.service';

@Module({
	imports: [],
	controllers: [GeolocationController],
	providers: [GeolocationService],
})
export class GeolocationModule {}