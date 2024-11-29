import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlayerService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPlayerDto: CreatePlayerDto) {

  }

  findAll() {
    return this.prisma.player.findMany({
      include: {
        team : {}
      }
    });
  }

  findOne(id: number) {
    return this.prisma.player.findUnique({
      where: {id: id}
    });
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return this.prisma.player.update({
      where: {id : id},
      data:{}
    });
  }

  remove(id: number) {
    return this.prisma.player.delete({
      where : {id :id}
    });
  }
}
