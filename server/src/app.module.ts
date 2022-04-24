import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot('mongodb://localhost/music')
  ]
})
export class AppModule {
  
}


