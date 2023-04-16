import { Column, Entity, Index } from "typeorm";

@Index("pk_margem", ["cnpj"], { unique: true })
@Entity("margem", { schema: "nfefacil" })
export class Margem {
  @Column("character", { primary: true, name: "cnpj", length: 14 })
  cnpj: string;

  @Column("double precision", { name: "margem", nullable: true, precision: 53 })
  margem: number | null;
}
