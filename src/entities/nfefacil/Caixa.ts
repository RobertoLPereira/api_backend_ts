import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("cxa_pkey", ["codigo"], { unique: true })
@Entity("caixa", { schema: "nfefacil" })
export class Caixa {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("character", { name: "nome", nullable: true, length: 15 })
  nome: string | null;

  @Column("integer", { name: "codmaquina", nullable: true })
  codmaquina: number | null;

  @Column("character", { name: "serie65", nullable: true, length: 3 })
  serie65: string | null;
}
