import { Column, Entity, Index } from "typeorm";

@Index("nfce_lido_pkey", ["id"], { unique: true })
@Entity("nfce_lido", { schema: "nfefacil" })
export class NfceLido {
  @Column("integer", { primary: true, name: "id" })
  id: number;

  @Column("timestamp without time zone", { name: "data", nullable: true })
  data: Date | null;
}
