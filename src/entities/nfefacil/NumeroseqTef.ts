import { Column, Entity, Index } from "typeorm";

@Index("numeroseq_tef_pkey", ["empresa", "numeroproximaseq"], { unique: true })
@Entity("numeroseq_tef", { schema: "nfefacil" })
export class NumeroseqTef {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "numeroproximaseq" })
  numeroproximaseq: number;
}
