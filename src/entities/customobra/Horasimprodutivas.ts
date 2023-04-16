import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("horasimprodutivas_pk", ["codigo"], { unique: true })
@Entity("horasimprodutivas", { schema: "customobra" })
export class Horasimprodutivas {
  @PrimaryGeneratedColumn({ type: "integer", name: "codigo" })
  codigo: number;

  @Column("integer", { name: "empresa", nullable: true })
  empresa: number | null;

  @Column("integer", { name: "codigodahora", nullable: true })
  codigodahora: number | null;

  @Column("character varying", {
    name: "descricao",
    nullable: true,
    length: 50,
  })
  descricao: string | null;

  @Column("integer", { name: "numerodedias", nullable: true })
  numerodedias: number | null;

  @Column("double precision", {
    name: "HorasCentesimais",
    nullable: true,
    precision: 53,
  })
  horasCentesimais: number | null;

  @Column("double precision", {
    name: "horasano",
    nullable: true,
    precision: 53,
  })
  horasano: number | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
