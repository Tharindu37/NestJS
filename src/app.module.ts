import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: '1234',
      username: 'postgres',
      entities: [User],
      database: 'testone',
      synchronize: true,
      logging: true,
    }),
    UserModule,
  ],
  controllers: [AppController, ExampleController],
  providers: [AppService, ExampleService],
})
export class AppModule {}
