import { Column, Entity, Index } from "typeorm";

@Index("uf_pkey", ["codigo"], { unique: true })
@Entity("uf", { schema: "nfefacil" })
export class Uf {
  @Column("character", { primary: true, name: "codigo", length: 2 })
  codigo: string;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 25,
  })
  descricao: string | null;
}
