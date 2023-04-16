import { Column, Entity, Index } from "typeorm";

@Index("fpgto_pkey", ["codigo"], { unique: true })
@Entity("forma_pgto", { schema: "nfefacil" })
export class FormaPgto {
  @Column("integer", { primary: true, name: "codigo" })
  codigo: number;

  @Column("character", { name: "descricao", length: 20 })
  descricao: string;

  @Column("integer", {
    name: "qtde_parcelas",
    nullable: true,
    default: () => "0",
  })
  qtdeParcelas: number | null;

  @Column("integer", {
    name: "dias_inicial",
    nullable: true,
    default: () => "0",
  })
  diasInicial: number | null;

  @Column("integer", {
    name: "dias_intervalo",
    nullable: true,
    default: () => "0",
  })
  diasIntervalo: number | null;
}
