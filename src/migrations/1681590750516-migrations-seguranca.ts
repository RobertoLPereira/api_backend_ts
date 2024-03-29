import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1681590750516 implements MigrationInterface {
    name = 'migrations1681590750516'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" DROP CONSTRAINT "fk_os"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" DROP CONSTRAINT "fk_osperfilsis"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" DROP CONSTRAINT "fk_osperfil"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" DROP CONSTRAINT "fk_transac"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" DROP CONSTRAINT "fk_menuopc"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" DROP CONSTRAINT "fk_menusis"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" DROP CONSTRAINT "fk_submenu"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" DROP CONSTRAINT "fk_sisperfil"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" DROP CONSTRAINT "fk_perfil"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" DROP CONSTRAINT "fk_perfilsis"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" DROP CONSTRAINT "fk_perfilcred"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "idordemservico" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "idpessoa" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "codigousuariorede" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "status" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicocorpo" ALTER COLUMN "idusuario" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ALTER COLUMN "idordemservico" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ALTER COLUMN "idperfilsistema" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "idtransacoes" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "subtransacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "urlsubtransacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "idOperacao" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "idmodulomenu" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "idoperacao" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "transacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "urltransacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "status" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "idsistema" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "denominacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "urlmenu" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "urlservico" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ALTER COLUMN "idsistema" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ALTER COLUMN "perfil" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ALTER COLUMN "status" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "nomesistema" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "sigla" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "url" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "status" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ALTER COLUMN "idperfil" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ALTER COLUMN "idsistema" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "idperfilsistema" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "idtransacoes" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "idsubtransacao" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "status" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "idordemservico" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "idpessoa" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "codigousuariorede" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "nome" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicocorpo" ALTER COLUMN "idusuario" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`CREATE UNIQUE INDEX "ordemservicociencia_pkey" ON "seguranca"."ordemservicociencia" ("idordemservicociencia") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "ordemservicocorpo_pkey" ON "seguranca"."ordemservicocorpo" ("idordemservico") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "ordemservicoperfil_pkey" ON "seguranca"."ordemservicoperfil" ("idordemservicoperfil") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "subtransacaomenu_pkey" ON "seguranca"."subtransacaomenu" ("idsubtransacao") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "transacoes_pkey" ON "seguranca"."transacoes" ("idtransacoes") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "modulomenu_pkey" ON "seguranca"."modulomenu" ("idmodulomenu") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "perfil_pkey" ON "seguranca"."perfil" ("idperfil") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "sistema_pkey" ON "seguranca"."sistema" ("idsistema") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "perfilsistema_pkey" ON "seguranca"."perfilsistema" ("idperfilsistema") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "pk_credenciais" ON "seguranca"."credenciaisperfil" ("idcredenciais") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "ordemservicousuarios_pkey" ON "seguranca"."ordemservicousuarios" ("idordemservicousuario") `);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ADD CONSTRAINT "FK_31d480c10ab59a926628f8c299a" FOREIGN KEY ("idordemservico") REFERENCES "seguranca"."ordemservicocorpo"("idordemservico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ADD CONSTRAINT "FK_359e6b22fdbf5ed8051576c8459" FOREIGN KEY ("idordemservico") REFERENCES "seguranca"."ordemservicocorpo"("idordemservico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ADD CONSTRAINT "FK_04ad1bc816ebb4b6a611748636c" FOREIGN KEY ("idperfilsistema") REFERENCES "seguranca"."perfilsistema"("idperfilsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ADD CONSTRAINT "FK_dcaa4403205ee997441c318be67" FOREIGN KEY ("idtransacoes") REFERENCES "seguranca"."transacoes"("idtransacoes") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ADD CONSTRAINT "FK_29224c4ab2a82c213d2badbf481" FOREIGN KEY ("idmodulomenu") REFERENCES "seguranca"."modulomenu"("idmodulomenu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ADD CONSTRAINT "FK_ff6a2f8ffc2af40e7d5e654308e" FOREIGN KEY ("idsistema") REFERENCES "seguranca"."sistema"("idsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ADD CONSTRAINT "FK_c3f11cae9dca7258871b5690bbc" FOREIGN KEY ("submenu") REFERENCES "seguranca"."modulomenu"("idmodulomenu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ADD CONSTRAINT "FK_47f403c1ed4fc1d337de9100f26" FOREIGN KEY ("idsistema") REFERENCES "seguranca"."sistema"("idsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ADD CONSTRAINT "FK_ccc1d3093b76d9926e36a810137" FOREIGN KEY ("idsistema") REFERENCES "seguranca"."sistema"("idsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ADD CONSTRAINT "FK_8bcff00835a2cef674b192a24a3" FOREIGN KEY ("idperfil") REFERENCES "seguranca"."perfil"("idperfil") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ADD CONSTRAINT "FK_7605c627dad7409d52270b3d107" FOREIGN KEY ("idperfilsistema") REFERENCES "seguranca"."perfilsistema"("idperfilsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" DROP CONSTRAINT "FK_7605c627dad7409d52270b3d107"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" DROP CONSTRAINT "FK_8bcff00835a2cef674b192a24a3"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" DROP CONSTRAINT "FK_ccc1d3093b76d9926e36a810137"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" DROP CONSTRAINT "FK_47f403c1ed4fc1d337de9100f26"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" DROP CONSTRAINT "FK_c3f11cae9dca7258871b5690bbc"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" DROP CONSTRAINT "FK_ff6a2f8ffc2af40e7d5e654308e"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" DROP CONSTRAINT "FK_29224c4ab2a82c213d2badbf481"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" DROP CONSTRAINT "FK_dcaa4403205ee997441c318be67"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" DROP CONSTRAINT "FK_04ad1bc816ebb4b6a611748636c"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" DROP CONSTRAINT "FK_359e6b22fdbf5ed8051576c8459"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" DROP CONSTRAINT "FK_31d480c10ab59a926628f8c299a"`);
        await queryRunner.query(`DROP INDEX "seguranca"."ordemservicousuarios_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."pk_credenciais"`);
        await queryRunner.query(`DROP INDEX "seguranca"."perfilsistema_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."sistema_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."perfil_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."modulomenu_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."transacoes_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."subtransacaomenu_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."ordemservicoperfil_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."ordemservicocorpo_pkey"`);
        await queryRunner.query(`DROP INDEX "seguranca"."ordemservicociencia_pkey"`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicocorpo" ALTER COLUMN "idusuario" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "nome" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "codigousuariorede" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "idpessoa" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicousuarios" ALTER COLUMN "idordemservico" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "idsubtransacao" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "idtransacoes" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ALTER COLUMN "idperfilsistema" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ALTER COLUMN "idsistema" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ALTER COLUMN "idperfil" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "url" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "sigla" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."sistema" ALTER COLUMN "nomesistema" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ALTER COLUMN "perfil" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ALTER COLUMN "idsistema" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "urlservico" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "urlmenu" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "denominacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ALTER COLUMN "idsistema" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "urltransacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "transacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "idoperacao" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ALTER COLUMN "idmodulomenu" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "idOperacao" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "urlsubtransacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "subtransacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ALTER COLUMN "idtransacoes" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ALTER COLUMN "idperfilsistema" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ALTER COLUMN "idordemservico" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicocorpo" ALTER COLUMN "idusuario" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "status" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "codigousuariorede" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "idpessoa" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ALTER COLUMN "idordemservico" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "seguranca"."credenciaisperfil" ADD CONSTRAINT "fk_perfilcred" FOREIGN KEY ("idperfilsistema") REFERENCES "seguranca"."perfilsistema"("idperfilsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ADD CONSTRAINT "fk_perfilsis" FOREIGN KEY ("idsistema") REFERENCES "seguranca"."sistema"("idsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfilsistema" ADD CONSTRAINT "fk_perfil" FOREIGN KEY ("idperfil") REFERENCES "seguranca"."perfil"("idperfil") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."perfil" ADD CONSTRAINT "fk_sisperfil" FOREIGN KEY ("idsistema") REFERENCES "seguranca"."sistema"("idsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ADD CONSTRAINT "fk_submenu" FOREIGN KEY ("submenu") REFERENCES "seguranca"."modulomenu"("idmodulomenu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."modulomenu" ADD CONSTRAINT "fk_menusis" FOREIGN KEY ("idsistema") REFERENCES "seguranca"."sistema"("idsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."transacoes" ADD CONSTRAINT "fk_menuopc" FOREIGN KEY ("idmodulomenu") REFERENCES "seguranca"."modulomenu"("idmodulomenu") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."subtransacaomenu" ADD CONSTRAINT "fk_transac" FOREIGN KEY ("idtransacoes") REFERENCES "seguranca"."transacoes"("idtransacoes") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ADD CONSTRAINT "fk_osperfil" FOREIGN KEY ("idordemservico") REFERENCES "seguranca"."ordemservicocorpo"("idordemservico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicoperfil" ADD CONSTRAINT "fk_osperfilsis" FOREIGN KEY ("idperfilsistema") REFERENCES "seguranca"."perfilsistema"("idperfilsistema") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "seguranca"."ordemservicociencia" ADD CONSTRAINT "fk_os" FOREIGN KEY ("idordemservico") REFERENCES "seguranca"."ordemservicocorpo"("idordemservico") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
