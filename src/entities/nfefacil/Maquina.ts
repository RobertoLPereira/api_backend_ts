import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("maq_pkey", ["codigo"], { unique: true })
@Entity("maquina", { schema: "nfefacil" })
export class Maquina {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("character", { name: "nome", nullable: true, length: 20 })
  nome: string | null;

  @Column("character", { name: "modelo", nullable: true, length: 20 })
  modelo: string | null;

  @Column("character", { name: "numero_serie", nullable: true, length: 20 })
  numeroSerie: string | null;

  @Column("character varying", {
    name: "observacao",
    nullable: true,
    length: 255,
  })
  observacao: string | null;

  @Column("date", { name: "data_compra", nullable: true })
  dataCompra: string | null;
}
