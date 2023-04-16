import { Column, Entity, Index } from "typeorm";

@Index("tpmvfin_pkey", ["codigo"], { unique: true })
@Entity("tipomovfin", { schema: "nfefacil" })
export class Tipomovfin {
  @Column("character", { primary: true, name: "codigo", length: 1 })
  codigo: string;

  @Column("character varying", { name: "descricao", nullable: true, length: 7 })
  descricao: string | null;
}
