import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("marcacoesnoregistrocadastral_pkey", ["idmarcacaopessoa"], {
  unique: true,
})
@Entity("marcacoesnoregistrocadastral", { schema: "cup" })
export class Marcacoesnoregistrocadastral {
  @PrimaryGeneratedColumn({ type: "integer", name: "idmarcacaopessoa" })
  idmarcacaopessoa: number;

  @Column("integer", { name: "idpessoa", default: () => "0" })
  idpessoa: number;

  @Column("date", {
    name: "datamarcacao",
    nullable: true,
    default: () => "now()",
  })
  datamarcacao: string | null;

  @Column("integer", { name: "idsufixo", nullable: true, default: () => "0" })
  idsufixo: number | null;

  @Column("integer", { name: "idstatus", nullable: true, default: () => "0" })
  idstatus: number | null;

  @Column("integer", { name: "idcontrole", nullable: true, default: () => "0" })
  idcontrole: number | null;

  @Column("integer", { name: "idrisco", nullable: true, default: () => "0" })
  idrisco: number | null;

  @Column("character varying", {
    name: "nivelrisco",
    nullable: true,
    length: 2,
    default: () => "'AA'",
  })
  nivelrisco: string | null;

  @Column("integer", {
    name: "idrestritivo",
    nullable: true,
    default: () => "0",
  })
  idrestritivo: number | null;

  @Column("integer", {
    name: "idimpeditivos",
    nullable: true,
    default: () => "0",
  })
  idimpeditivos: number | null;
}
