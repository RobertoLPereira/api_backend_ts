import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("unidade_pkey", ["id"], { unique: true })
@Entity("unidade", { schema: "apoio" })
export class Unidade {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "codigo", default: () => "0" })
  codigo: number;

  @Column("integer", { name: "digito", nullable: true })
  digito: number | null;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 40,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
