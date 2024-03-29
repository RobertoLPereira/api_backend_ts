import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1681589090106 implements MigrationInterface {
    name = 'migrations1681589090106'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" DROP CONSTRAINT "anuncioItem"`);
        await queryRunner.query(`ALTER TABLE "delivery"."anunciorepasse" DROP CONSTRAINT "fk_anunciorepasse_anuncio"`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" DROP CONSTRAINT "fk_prazoentrega_anuncio"`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" DROP CONSTRAINT "fk_vendaminima_anuncio"`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" DROP CONSTRAINT "pessoaJuridica"`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" DROP CONSTRAINT "pessoaFisica"`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" DROP CONSTRAINT "pedidoItem"`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" DROP CONSTRAINT "tiporelacionamentoSubtipo"`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" ALTER COLUMN "descricao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" ALTER COLUMN "idanuncio" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "delivery"."anunciorepasse"."idpessoa" IS NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."anunciorepasse" ALTER COLUMN "idanuncio" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "delivery"."anunciorepasse"."idanuncio" IS NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" ADD CONSTRAINT "UQ_dee14aa8ba45cccc75777b96c04" UNIQUE ("idprazoentrega")`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" ALTER COLUMN "denominacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" ADD CONSTRAINT "UQ_cdcad899865a51c5c73d684e930" UNIQUE ("idvendaminima")`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" ALTER COLUMN "denominacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncio" ALTER COLUMN "idvendaminima" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncio" ALTER COLUMN "idprazoentrega" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncio" ALTER COLUMN "denominacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "idpessoa" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "tipologradouro" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "complemento" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "perimetro" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "cep" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "caixapostal" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "idtipoendereco" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "idccorrespondencia" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "torre" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "idpessoa" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "numeroregistrojunta" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "orgaoexpedidor" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "inscricaoestadual" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "incentivoicms" SET DEFAULT NULL::numeric`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "optantesimples" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "grupoeconomico" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "inscricaomunicipal" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "idpessoa" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "apelido" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "nomepai" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "idestadocivil" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "idsexo" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "profissao" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "ufnaturalidade" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "registrogeral" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "orgaoemissor" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "ufrg" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "codigousuariorede" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "status" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "senha" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" ALTER COLUMN "unidade" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" ALTER COLUMN "checked" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedido" ALTER COLUMN "enviado" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedido" ALTER COLUMN "recebido" SET DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE "delivery"."tiporelacionamento" ALTER COLUMN "denominacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ALTER COLUMN "prefixo" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ALTER COLUMN "denominacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ALTER COLUMN "idtiporelacionamento" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."telefones" ALTER COLUMN "numero" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."telefones" ALTER COLUMN "pais" SET DEFAULT 55`);
        await queryRunner.query(`ALTER TABLE "delivery"."telefones" ALTER COLUMN "falarcom" SET DEFAULT NULL::character varying`);
        await queryRunner.query(`ALTER TABLE "delivery"."tipoendereco" ALTER COLUMN "denominacao" SET DEFAULT NULL::bpchar`);
        await queryRunner.query(`CREATE UNIQUE INDEX "anuncioitem_pkey" ON "delivery"."anuncioitem" ("idanuncioitem") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "pk_anunciorepasse_idanunciorepasse" ON "delivery"."anunciorepasse" ("idanunciorepasse") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "prazoentrega_pkey" ON "delivery"."prazoentrega" ("idprazoentrega") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "vendaminima_pkey" ON "delivery"."vendaminima" ("idvendaminima") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "unq_anuncio_idvendaminima" ON "delivery"."anuncio" ("idvendaminima") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "unq_anuncio_idprazoentrega" ON "delivery"."anuncio" ("idprazoentrega") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "unq_anuncio_idcategoria" ON "delivery"."anuncio" ("idcategoria") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "anuncio_pkey" ON "delivery"."anuncio" ("idanuncio") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "categorias_pkey" ON "delivery"."categorias" ("idcategoria") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "credenciais_pkey" ON "delivery"."credenciais" ("id") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "unq_endereco_idtipoendereco" ON "delivery"."endereco" ("idtipoendereco") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "endereco_pkey" ON "delivery"."endereco" ("idendereco") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "juridica_pkey" ON "delivery"."juridica" ("idjuridica") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "pk_pessoa" ON "delivery"."pessoa" ("idpessoa") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "fisica_pkey" ON "delivery"."fisica" ("idfisica") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "pedidoitem_pkey" ON "delivery"."pedidoitem" ("idpedidoitem") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "pedido_pkey" ON "delivery"."pedido" ("idpedido") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "tiporelacionamento_pkey" ON "delivery"."tiporelacionamento" ("idtiporelacionamento") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "subtiporegistro_pkey" ON "delivery"."subtiporegistro" ("idsubtiporegistro") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "telefones_pkey" ON "delivery"."telefones" ("idtelefone") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "tipoendereco_pkey" ON "delivery"."tipoendereco" ("idtipoendereco") `);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" ADD CONSTRAINT "FK_1a27cd93dd2090f64e868edf8c4" FOREIGN KEY ("idanuncio") REFERENCES "delivery"."anuncio"("idanuncio") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."anunciorepasse" ADD CONSTRAINT "FK_01fd712b870f8e38f9d484c5dc4" FOREIGN KEY ("idanuncio") REFERENCES "delivery"."anuncio"("idanuncio") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" ADD CONSTRAINT "FK_dee14aa8ba45cccc75777b96c04" FOREIGN KEY ("idprazoentrega") REFERENCES "delivery"."anuncio"("idprazoentrega") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" ADD CONSTRAINT "FK_cdcad899865a51c5c73d684e930" FOREIGN KEY ("idvendaminima") REFERENCES "delivery"."anuncio"("idvendaminima") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ADD CONSTRAINT "FK_0b581de1f4933ade3dcc3da86b7" FOREIGN KEY ("idpessoa") REFERENCES "delivery"."pessoa"("idpessoa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ADD CONSTRAINT "FK_8550da69c13259ca5b5c48f1e8d" FOREIGN KEY ("idpessoa") REFERENCES "delivery"."pessoa"("idpessoa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" ADD CONSTRAINT "FK_559a22801117770e28dcc94db0f" FOREIGN KEY ("idpedido") REFERENCES "delivery"."pedido"("idpedido") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ADD CONSTRAINT "FK_19170e3b3bd19b6fafeaffa31b0" FOREIGN KEY ("idtiporelacionamento") REFERENCES "delivery"."tiporelacionamento"("idtiporelacionamento") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" DROP CONSTRAINT "FK_19170e3b3bd19b6fafeaffa31b0"`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" DROP CONSTRAINT "FK_559a22801117770e28dcc94db0f"`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" DROP CONSTRAINT "FK_8550da69c13259ca5b5c48f1e8d"`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" DROP CONSTRAINT "FK_0b581de1f4933ade3dcc3da86b7"`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" DROP CONSTRAINT "FK_cdcad899865a51c5c73d684e930"`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" DROP CONSTRAINT "FK_dee14aa8ba45cccc75777b96c04"`);
        await queryRunner.query(`ALTER TABLE "delivery"."anunciorepasse" DROP CONSTRAINT "FK_01fd712b870f8e38f9d484c5dc4"`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" DROP CONSTRAINT "FK_1a27cd93dd2090f64e868edf8c4"`);
        await queryRunner.query(`DROP INDEX "delivery"."tipoendereco_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."telefones_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."subtiporegistro_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."tiporelacionamento_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."pedido_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."pedidoitem_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."fisica_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."pk_pessoa"`);
        await queryRunner.query(`DROP INDEX "delivery"."juridica_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."endereco_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."unq_endereco_idtipoendereco"`);
        await queryRunner.query(`DROP INDEX "delivery"."credenciais_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."categorias_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."anuncio_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."unq_anuncio_idcategoria"`);
        await queryRunner.query(`DROP INDEX "delivery"."unq_anuncio_idprazoentrega"`);
        await queryRunner.query(`DROP INDEX "delivery"."unq_anuncio_idvendaminima"`);
        await queryRunner.query(`DROP INDEX "delivery"."vendaminima_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."prazoentrega_pkey"`);
        await queryRunner.query(`DROP INDEX "delivery"."pk_anunciorepasse_idanunciorepasse"`);
        await queryRunner.query(`DROP INDEX "delivery"."anuncioitem_pkey"`);
        await queryRunner.query(`ALTER TABLE "delivery"."tipoendereco" ALTER COLUMN "denominacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."telefones" ALTER COLUMN "falarcom" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."telefones" ALTER COLUMN "pais" SET DEFAULT '55'`);
        await queryRunner.query(`ALTER TABLE "delivery"."telefones" ALTER COLUMN "numero" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ALTER COLUMN "idtiporelacionamento" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ALTER COLUMN "denominacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ALTER COLUMN "prefixo" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."tiporelacionamento" ALTER COLUMN "denominacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedido" ALTER COLUMN "recebido" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedido" ALTER COLUMN "enviado" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" ALTER COLUMN "checked" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" ALTER COLUMN "unidade" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "senha" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "status" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "codigousuariorede" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "ufrg" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "orgaoemissor" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "registrogeral" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "ufnaturalidade" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "profissao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "idsexo" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "idestadocivil" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "nomepai" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "apelido" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ALTER COLUMN "idpessoa" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "inscricaomunicipal" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "grupoeconomico" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "optantesimples" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "incentivoicms" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "inscricaoestadual" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "orgaoexpedidor" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "numeroregistrojunta" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ALTER COLUMN "idpessoa" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "torre" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "idccorrespondencia" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "idtipoendereco" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "caixapostal" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "cep" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "perimetro" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "complemento" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "tipologradouro" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."endereco" ALTER COLUMN "idpessoa" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncio" ALTER COLUMN "denominacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncio" ALTER COLUMN "idprazoentrega" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncio" ALTER COLUMN "idvendaminima" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" ALTER COLUMN "denominacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" DROP CONSTRAINT "UQ_cdcad899865a51c5c73d684e930"`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" ALTER COLUMN "denominacao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" DROP CONSTRAINT "UQ_dee14aa8ba45cccc75777b96c04"`);
        await queryRunner.query(`COMMENT ON COLUMN "delivery"."anunciorepasse"."idanuncio" IS 'Anuncio vinculado ao repasse'`);
        await queryRunner.query(`ALTER TABLE "delivery"."anunciorepasse" ALTER COLUMN "idanuncio" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "delivery"."anunciorepasse"."idpessoa" IS 'Fornecedor'`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" ALTER COLUMN "idanuncio" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" ALTER COLUMN "descricao" SET DEFAULT NULL`);
        await queryRunner.query(`ALTER TABLE "delivery"."subtiporegistro" ADD CONSTRAINT "tiporelacionamentoSubtipo" FOREIGN KEY ("idtiporelacionamento") REFERENCES "delivery"."tiporelacionamento"("idtiporelacionamento") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."pedidoitem" ADD CONSTRAINT "pedidoItem" FOREIGN KEY ("idpedido") REFERENCES "delivery"."pedido"("idpedido") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."fisica" ADD CONSTRAINT "pessoaFisica" FOREIGN KEY ("idpessoa") REFERENCES "delivery"."pessoa"("idpessoa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."juridica" ADD CONSTRAINT "pessoaJuridica" FOREIGN KEY ("idpessoa") REFERENCES "delivery"."pessoa"("idpessoa") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."vendaminima" ADD CONSTRAINT "fk_vendaminima_anuncio" FOREIGN KEY ("idvendaminima") REFERENCES "delivery"."anuncio"("idvendaminima") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."prazoentrega" ADD CONSTRAINT "fk_prazoentrega_anuncio" FOREIGN KEY ("idprazoentrega") REFERENCES "delivery"."anuncio"("idprazoentrega") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."anunciorepasse" ADD CONSTRAINT "fk_anunciorepasse_anuncio" FOREIGN KEY ("idanuncio") REFERENCES "delivery"."anuncio"("idanuncio") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "delivery"."anuncioitem" ADD CONSTRAINT "anuncioItem" FOREIGN KEY ("idanuncio") REFERENCES "delivery"."anuncio"("idanuncio") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
