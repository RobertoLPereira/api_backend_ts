import { Column, Entity, Index } from "typeorm";

@Index("unidade_pkey", ["codigo"], { unique: true })
@Entity("unidade", { schema: "nfefacil" })
export class Unidade {
  @Column("character", { primary: true, name: "codigo", length: 3 })
  codigo: string;

  @Column("character", { name: "descricao", nullable: true, length: 25 })
  descricao: string | null;
}
