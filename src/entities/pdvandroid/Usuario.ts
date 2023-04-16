import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("usuario_pkey", ["id"], { unique: true })
@Index("usuario_usuario_key", ["usuario"], { unique: true })
@Entity("usuario", { schema: "pdvandroid" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "usuario", unique: true, length: 15 })
  usuario: string;

  @Column("character varying", { name: "senha", nullable: true, length: 50 })
  senha: string | null;
}
