import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("supri_pkey", ["id"], { unique: true })
@Entity("suprimento", { schema: "nfefacil" })
export class Suprimento {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("integer", { name: "empresa" })
  empresa: number;

  @Column("integer", { name: "codcaixa" })
  codcaixa: number;

  @Column("integer", { name: "codlogin" })
  codlogin: number;

  @Column("integer", { name: "codgerente" })
  codgerente: number;

  @Column("date", { name: "data_suprimento", nullable: true })
  dataSuprimento: string | null;

  @Column("double precision", { name: "valor", nullable: true, precision: 53 })
  valor: number | null;
}
