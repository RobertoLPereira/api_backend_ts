import { Column, Entity, Index } from "typeorm";

@Index("numerolote_pkey", ["empresa", "numeroproximolote"], { unique: true })
@Entity("numerolote", { schema: "nfefacil" })
export class Numerolote {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "numeroproximolote" })
  numeroproximolote: number;
}
