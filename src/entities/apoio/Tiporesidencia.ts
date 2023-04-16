import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tiporesidencia_pkey", ["id"], { unique: true })
@Entity("tiporesidencia", { schema: "apoio" })
export class Tiporesidencia {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 15,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
