    function ajaxTabela(){
        $.ajax({
        type:"GET",
        url:"https://api.api-futebol.com.br/v1/campeonatos/10/tabela",
        headers:{'Authorization':`Bearer test_0d2f2199b6c253642030c86933a8bc`},
        contentType:'json',
        dataType:'json',
        sucess:function(response){

            criarTabela(response);
            ajaxRodadas();
        }
        });
    }

    function ajaxRodadas(){
        $.ajax({
        type:"GET",
        url:"https://api.api-futebol.com.br/v1/campeonatos/10/rodadas",
        headers:{'Authorizan': `Bearer test_0d2f2199b6c253642030c86933a8bc`},
        contentType:'json',
        dataType:'json',
        sucess:function(response){
        var RodadaId = VerificarRodada(response);
        ajaxJogos(RodadaId);
        }
        });
    }

    function ajaxJogos(RodadaId){
        $.ajax({
        type:"GET",
        url: `https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/${rodadaId}`,
        headers:{'Authorization':`Bearer test_0d2f2199b6c253642030c86933a8bc`},
        contentType:"json",
        dataType:"json",
        sucess:function(response){

        criarJogos(response);

        existeArtilharia == false? ajaxArtilharia:"";
         }
         });
    }