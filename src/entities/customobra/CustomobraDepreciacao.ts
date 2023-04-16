import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("customobra.depreciacao_pkey", ["id"], { unique: true })
@Entity("customobra.depreciacao", { schema: "customobra" })
export class CustomobraDepreciacao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "bem", length: 50 })
  bem: string;

  @Column("integer", { name: "anosvidautil", nullable: true })
  anosvidautil: number | null;

  @Column("numeric", {
    name: "taxadepreciavelmes",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  taxadepreciavelmes: string | null;
}
