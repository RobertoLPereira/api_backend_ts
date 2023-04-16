import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("tipopgto_pkey", ["id"], { unique: true })
@Entity("tipo_pgto", { schema: "nfefacil" })
export class TipoPgto {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", { name: "codigo", nullable: true, length: 10 })
  codigo: string | null;

  @Column("character", { name: "descricao", nullable: true, length: 30 })
  descricao: string | null;

  @Column("character", { name: "tef", nullable: true, length: 1 })
  tef: string | null;
}
