import { Column, Entity, Index } from "typeorm";

@Index("tdoc_pkey", ["codigo"], { unique: true })
@Entity("tipo_doc", { schema: "nfefacil" })
export class TipoDoc {
  @Column("character", { primary: true, name: "codigo", length: 2 })
  codigo: string;

  @Column("character", { name: "descricao", length: 20 })
  descricao: string;
}
