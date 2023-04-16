import { Column, Entity, Index } from "typeorm";

@Index("aliquf_pkey", ["codigo"], { unique: true })
@Entity("aliquf", { schema: "nfefacil" })
export class Aliquf {
  @Column("character", { primary: true, name: "codigo", length: 2 })
  codigo: string;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 25,
  })
  descricao: string | null;

  @Column("double precision", {
    name: "aliqicms",
    nullable: true,
    precision: 53,
  })
  aliqicms: number | null;
}
