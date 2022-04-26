import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileService } from "src/file/file.service";
import { Comment, CommentSchema } from "./schems/comment.schema";
import { Track, TrackSchema } from "./schems/track.schema";
import { TrackController } from "./tarck.controller";
import { TrackService } from "./track.service";


@Module({
  imports: [
    MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}])
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService]
  
})
export class TrackModule {

}
