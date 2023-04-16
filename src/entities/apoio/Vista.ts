import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("vista_pkey", ["idVista"], { unique: true })
@Entity("vista", { schema: "apoio" })
export class Vista {
  @PrimaryGeneratedColumn({ type: "integer", name: "IdVista" })
  idVista: number;

  @Column("character varying", {
    name: "denominacao",
    nullable: true,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
