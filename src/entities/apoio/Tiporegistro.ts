import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tiporegistro_pkey", ["idTipoRegistro"], { unique: true })
@Entity("tiporegistro", { schema: "apoio" })
export class Tiporegistro {
  @PrimaryGeneratedColumn({ type: "integer", name: "idTipoRegistro" })
  idTipoRegistro: number;

  @Column("character", {
    name: "denominacao",
    nullable: true,
    length: 40,
    default: () => "NULL::bpchar",
  })
  denominacao: string | null;

  @Column("integer", { name: "codigotipo", nullable: true })
  codigotipo: number | null;
}
