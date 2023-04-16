import { Column, Entity, Index } from "typeorm";

@Index("pessoa_pkey", ["codigo"], { unique: true })
@Entity("pessoa", { schema: "nfefacil" })
export class Pessoa {
  @Column("character", { primary: true, name: "codigo", length: 1 })
  codigo: string;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 10,
  })
  descricao: string | null;
}
