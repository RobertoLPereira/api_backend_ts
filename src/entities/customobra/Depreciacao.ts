import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("depreciacao_pkey", ["id"], { unique: true })
@Entity("depreciacao", { schema: "customobra" })
export class Depreciacao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "bem", length: 30 })
  bem: string;

  @Column("integer", { name: "taxaanual" })
  taxaanual: number;

  @Column("integer", { name: "anosvidautil", nullable: true })
  anosvidautil: number | null;

  @Column("real", { name: "taxadepreciavelmes", nullable: true, precision: 24 })
  taxadepreciavelmes: number | null;
}
