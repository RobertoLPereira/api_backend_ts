import { Column, Entity, Index } from "typeorm";

@Index("numerosequencia_pkey", ["empresa", "numeroproximaseq"], {
  unique: true,
})
@Entity("numerosequencia", { schema: "nfefacil" })
export class Numerosequencia {
  @Column("integer", { primary: true, name: "empresa" })
  empresa: number;

  @Column("integer", { primary: true, name: "numeroproximaseq" })
  numeroproximaseq: number;
}
