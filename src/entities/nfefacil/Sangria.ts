import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sang_pkey", ["id"], { unique: true })
@Entity("sangria", { schema: "nfefacil" })
export class Sangria {
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

  @Column("date", { name: "data_sangria", nullable: true })
  dataSangria: string | null;

  @Column("double precision", { name: "valor", nullable: true, precision: 53 })
  valor: number | null;
}
