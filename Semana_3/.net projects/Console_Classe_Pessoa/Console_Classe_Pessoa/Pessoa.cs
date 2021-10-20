using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Console_Classe_Pessoa
{MyBanking
    class Pessoa
    {
        //Atributos
        public string nome;
        public int idade;
        public string rg;
        public string cpf;

        //Métodos
        public void Acenar(Pessoa pessoa)
        {
            Console.WriteLine("{0} acenou para {1}", this.nome, pessoa.nome);
        }

        public void PerguntaIdade(Pessoa pessoa)
        {
            Console.WriteLine("{0} qual sua idade?", pessoa.nome);
            pessoa.RespostaIdade();
        }

        public void RespostaIdade()
        {
            Console.WriteLine("Eu tenho {0} anos", this.idade);
        }

    }
}
