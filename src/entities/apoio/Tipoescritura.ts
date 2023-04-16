import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipoescritura_pkey", ["idTipoEscritura"], { unique: true })
@Entity("tipoescritura", { schema: "apoio" })
export class Tipoescritura {
  @PrimaryGeneratedColumn({ type: "integer", name: "IdTipoEscritura" })
  idTipoEscritura: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 20,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;
}
