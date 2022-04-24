import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from "./schems/track.schema";


@Injectable()

export class TrackService{

  constructor(@InjectModel(Track.name) private catModel: Model<TrackDocument>) {}

  async create() {}

  async getAll() {}

  async getOne() {}

  async delete() {}
}
