import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipodeencargo_pkey", ["idtipoencargo"], { unique: true })
@Entity("tipodeencargo_old", { schema: "customobra" })
export class TipodeencargoOld {
  @PrimaryGeneratedColumn({ type: "integer", name: "idtipoencargo" })
  idtipoencargo: number;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 255,
  })
  descricao: string | null;
}
