import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1681591455905 implements MigrationInterface {
    name = 'migrations1681591455905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "pdvandroid"."configuracoes_id_seq" OWNED BY "pdvandroid"."configuracoes"."id"`);
        await queryRunner.query(`ALTER TABLE "pdvandroid"."configuracoes" ALTER COLUMN "id" SET DEFAULT nextval('"pdvandroid"."configuracoes_id_seq"')`);
        await queryRunner.query(`ALTER TABLE "pdvandroid"."configuracoes" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`CREATE UNIQUE INDEX "caixa_pkey" ON "pdvandroid"."caixa" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "cliente_nome_key" ON "pdvandroid"."cliente" ("nome") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "cliente_pkey" ON "pdvandroid"."cliente" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "configuracoes_pkey" ON "pdvandroid"."configuracoes" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "empresa_nome_key" ON "pdvandroid"."empresa" ("nome") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "empresa_pkey" ON "pdvandroid"."empresa" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "forma_pagto_pkey" ON "pdvandroid"."forma_pagto" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "forma_pagto_descricao_key" ON "pdvandroid"."forma_pagto" ("descricao") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "produto_pkey" ON "pdvandroid"."produto" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "produto_descricao_key" ON "pdvandroid"."produto" ("descricao") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "produto_grupo_pkey" ON "pdvandroid"."produto_grupo" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "produto_grupo_descricao_key" ON "pdvandroid"."produto_grupo" ("descricao") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "usuario_usuario_key" ON "pdvandroid"."usuario" ("usuario") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "usuario_pkey" ON "pdvandroid"."usuario" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "venda_pkey" ON "pdvandroid"."venda" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "venda_item_pkey" ON "pdvandroid"."venda_item" ("id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "pdvandroid"."venda_item_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."venda_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."usuario_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."usuario_usuario_key"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."produto_grupo_descricao_key"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."produto_grupo_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."produto_descricao_key"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."produto_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."forma_pagto_descricao_key"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."forma_pagto_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."empresa_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."empresa_nome_key"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."configuracoes_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."cliente_pkey"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."cliente_nome_key"`);
        await queryRunner.query(`DROP INDEX "pdvandroid"."caixa_pkey"`);
        await queryRunner.query(`ALTER TABLE "pdvandroid"."configuracoes" ALTER COLUMN "id" SET DEFAULT nextval('aluguel.configuracoes_id_seq')`);
        await queryRunner.query(`ALTER TABLE "pdvandroid"."configuracoes" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "pdvandroid"."configuracoes_id_seq"`);
    }

}
