import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ PlayerModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
