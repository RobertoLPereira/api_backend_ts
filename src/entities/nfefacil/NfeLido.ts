import { Column, Entity, Index } from "typeorm";

@Index("nfe_lido_pkey", ["id"], { unique: true })
@Entity("nfe_lido", { schema: "nfefacil" })
export class NfeLido {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("timestamp without time zone", { name: "data", nullable: true })
  data: Date | null;
}
