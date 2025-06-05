import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { AdminService } from "../modules/admin/admin.service";

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const adminService = app.get(AdminService);

  try {
    await adminService.create({
      email: "superadmin@solarsangathan.com",
      password: "superadmin123",
      name: "Super Admin",
      role: "SUPER_ADMIN",
    });
    console.log("Super admin created successfully");
  } catch (error) {
    console.error("Error creating super admin:", error.message);
  } finally {
    await app.close();
  }
}

bootstrap();
