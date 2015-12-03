var mod = angular.module('portalMod', ['ngTagsInput']);

mod.controller('portalCtrl', ['$scope', '$sce', '$compile', function($scope, $sce, $compile) {

    var DIR = 'images/apps/';

    $scope.introText = $sce.trustAsHtml('');

    $scope.tools = [
        {
            title: 'L1000CDS2',
            description: 'Use L1000CDS2 to find consensus signatures that match your input signature vector.',
            url: 'http://amp.pharm.mssm.edu/L1000CDS2',
            image: DIR + 'l1000cds2.png',
            directive: 'l1000cds2-textarea',
            cssClass: 'l1000cds2'
        },
        {
            title: 'iLINCS',
            description: 'Use iLINCS to analyze differential gene expression in a dataset identified via LINCS Data Portal.',
            url: 'http://eh3.uc.edu/GenomicsPortals/Lincs.jsp',
            image: DIR + 'ilincs.png',
            cssClass: 'ilincs'
        },
        {
            title: 'LINCS Data Portal',
            description: 'Search and download LINCS datasets and entities.',
            url: 'http://lincsportal.ccs.miami.edu/dcic-portal/',
            image: 'https://placeholdit.imgix.net/~text?txtsize=33&w=100&h=100',
            cssClass: 'lincs-data-portal'
        },
        {
            title: 'piLINCS',
            description: 'Use piLINCS to access to LINCS proteomics datasets (P100, GCP, etc.) available in Panorama.',
            url: 'http://eh3.uc.edu/pilincs/',
            image: DIR + 'pilincs.png',
            cssClass: 'pilincs'
        },
        {
            title: 'L2S',
            description: 'Use L2S to search LINCS L1000 gene expression profiles.',
            url: 'http://amp.pharm.mssm.edu/Lich/#/search',
            image: DIR + 'l2s.png',
            directive: 'l2s-bar',
            cssClass: 'l2s'
        },
        {
            title: 'Enrichr',
            description: 'Use Enrichr to perform gene set enrichment analysis.',
            url: 'http://amp.pharm.mssm.edu/Enrichr/',
            image: DIR + 'enrichr.png',
            directive: 'enrichr-textarea',
            cssClass: 'enrichr'
        },
        {
            title: 'The Harmonizome',
            description: 'Use the Harmonizome to search for genes or proteins and their functional terms extracted and organized from over 100 publicly available resources.',
            url: 'http://amp.pharm.mssm.edu/Harmonizome/',
            image: DIR + 'harmonizome.png',
            directive: 'harmonizome-bar',
            cssClass: 'harmonizome'
        }
    ];
}]);

mod.directive('toolDirectiveWrapper', function($compile) {
   return {
       restrict: 'A',
       scope: {
           // This is confusing to me.
           // We're using the directive name as a scope variable.
           toolDirectiveWrapper: '='
       },
       link: function(scope, elem, attrs) {
           var toolObj = scope.$parent.tools[scope.toolDirectiveWrapper];
           if (toolObj && toolObj.directive !== 'undefined') {
               elem.find('placeholder').replaceWith(
                   $compile('<' + toolObj.directive + '></' + toolObj.directive + '>')(scope)
               )
           }
       }
   }
});

mod.directive('l1000cds2Textarea', function() {
    return {
        restrict: 'AE',
        controller: ['$scope', '$element', function($scope, $element) {
            $scope.upGenes = '';
            $scope.dnGenes = '';
            $scope.example = function() {
                $scope.upGenes = [
                    'KIAA0907', 'KDM5A', 'CDC25A',
                    'EGR1', 'GADD45B', 'RELB', 'TERF2IP',
                    'SMNDC1', 'TICAM1', 'NFKB2', 'RGS2',
                    'NCOA3', 'ICAM1', 'TEX10', 'CNOT4',
                    'ARID4B', 'CLPX', 'CHIC2', 'CXCL2',
                    'FBXO11', 'MTF2', 'CDK2', 'DNTTIP2',
                    'GADD45A', 'GOLT1B', 'POLR2K', 'NFKBIE',
                    'GABPB1', 'ECD', 'PHKG2', 'RAD9A',
                    'NET1', 'KIAA0753', 'EZH2', 'NRAS',
                    'ATP6V0B', 'CDK7', 'CCNH', 'SENP6',
                    'TIPARP', 'FOS', 'ARPP19', 'TFAP2A',
                    'KDM5B', 'NPC1', 'TP53BP2', 'NUSAP1'
                ].join('\n');
                $scope.dnGenes = [
                    'SCCPDH', 'KIF20A',
                    'FZD7', 'USP22', 'PIP4K2B', 'CRYZ',
                    'GNB5', 'EIF4EBP1', 'PHGDH', 'RRAGA',
                    'SLC25A46', 'RPA1', 'HADH', 'DAG1',
                    'RPIA', 'P4HA2', 'MACF1', 'TMEM97',
                    'MPZL1', 'PSMG1', 'PLK1', 'SLC37A4',
                    'GLRX', 'CBR3', 'PRSS23', 'NUDCD3',
                    'CDC20', 'KIAA0528', 'NIPSNAP1', 'TRAM2',
                    'STUB1', 'DERA', 'MTHFD2', 'BLVRA',
                    'IARS2', 'LIPA', 'PGM1', 'CNDP2',
                    'BNIP3', 'CTSL1', 'CDC25B', 'HSPA8',
                    'EPRS', 'PAX8', 'SACM1L', 'HOXA5',
                    'TLE1', 'PYGL', 'TUBB6', 'LOXL1'
                ].join('\n');
            };
            $scope.search = function() {
                var payload = {
                    data: {
                        upGenes: $scope.upGenes.split('\n'),
                        dnGenes: $scope.dnGenes.split('\n')
                    },
                    config: {
                        aggravate: true,
                        searchMethod: 'geneSet',
                        share: true,
                        combination: true,
                        'db-version': 'latest'
                    },
                    metadata: []
                };
                $.ajax({
                    method: 'POST',
                    url: 'http://amp.pharm.mssm.edu/L1000CDS2/queryURLEncoded',
                    data: {
                        input: JSON.stringify(payload)
                    },
                    success: function(data) {
                        var a = $element.find('a');
                        a.attr('href', 'http://amp.pharm.mssm.edu/L1000CDS2/#/result/' + data.shareId);
                        a.removeClass('hidden');
                        a.text('L1000CDS2 results');
                    }
                });
            }
        }],
        templateUrl: 'view/getting-started/l1000cds2.html'
    }
});

mod.directive('enrichrTextarea', function() {
    return {
        restrict: 'AE',
        controller: ['$scope', function($scope) {
            $scope.genes = '';
            $scope.example = function() {
                $scope.genes = [
                    'Nsun3', 'Polrmt', 'Nlrx1', 'Sfxn5', 'Zc3h12c', 'Slc25a39', 'Arsg', 'Defb29', 'Ndufb6', 'Zfand1', 'Tmem77', '5730403B10Rik',
                    'RP23-195K8.6', 'Tlcd1', 'Psmc6', 'Slc30a6', 'LOC100047292', 'Lrrc40', 'Orc5l', 'Mpp7', 'Unc119b', 'Prkaca', 'Tcn2', 'Psmc3ip', 'Pcmtd2',
                    'Acaa1a', 'Lrrc1', '2810432D09Rik', 'Sephs2', 'Sac3d1', 'Tmlhe', 'LOC623451', 'Tsr2', 'Plekha7', 'Gys2', 'Arhgef12', 'Hibch',
                    'Lyrm2', 'Zbtb44', 'Entpd5', 'Rab11fip2', 'Lipt1', 'Intu', 'Anxa13', 'Klf12', 'Sat2', 'Gal3st2', 'Vamp8', 'Fkbpl',
                    'Aqp11', 'Trap1', 'Pmpcb', 'Tm7sf3', 'Rbm39', 'Bri3', 'Kdr', 'Zfp748', 'Nap1l1', 'Dhrs1', 'Lrrc56',
                    'Wdr20a', 'Stxbp2', 'Klf1', 'Ufc1', 'Ccdc16', '9230114K14Rik', 'Rwdd3', '2610528K11Rik', 'Aco1', 'Cables1', 'LOC100047214', 'Yars2', 'Lypla1', 'Kalrn', 'Gyk',
                    'Zfp787', 'Zfp655', 'Rabepk', 'Zfp650', '4732466D17Rik', 'Exosc4', 'Wdr42a', 'Gphn', '2610528J11Rik', '1110003E01Rik',
                    'Mdh1', '1200014M14Rik', 'AW209491', 'Mut', '1700123L14Rik', '2610036D13Rik',
                    'Cox15', 'Tmem30a', 'Nsmce4a', 'Tm2d2', 'Rhbdd3', 'Atxn2', 'Nfs1', '3110001I20Rik', 'BC038156', 'LOC100047782', '2410012H22Rik', 'Rilp',
                    'A230062G08Rik', 'Pttg1ip', 'Rab1', 'Afap1l1', 'Lyrm5', '2310026E23Rik', 'C330002I19Rik', 'Zfyve20', 'Poli',
                    'Tomm70a', 'Slc7a6os', 'Mat2b', '4932438A13Rik', 'Lrrc8a', 'Smo', 'Nupl2', 'Trpc2', 'Arsk', 'D630023B12Rik',
                    'Mtfr1', '5730414N17Rik', 'Scp2', 'Zrsr1', 'Nol7', 'C330018D20Rik', 'Ift122', 'LOC100046168', 'D730039F16Rik', 'Scyl1',
                    '1700023B02Rik', '1700034H14Rik', 'Fbxo8', 'Paip1', 'Tmem186', 'Atpaf1', 'LOC100046254', 'LOC100047604', 'Coq10a', 'Fn3k',
                    'Sipa1l1', 'Slc25a16', 'Slc25a40', 'Rps6ka5', 'Trim37', 'Lrrc61', 'Abhd3', 'Gbe1', 'Parp16', 'Hsd3b2',
                    'Esm1', 'Dnajc18', 'Dolpp1', 'Lass2', 'Wdr34', 'Rfesd', 'Cacnb4', '2310042D19Rik', 'Srr',
                    'Bpnt1', '6530415H11Rik', 'Clcc1', 'Tfb1m', '4632404H12Rik', 'D4Bwg0951e', 'Med14', 'Adhfe1', 'Thtpa',
                    'Cat', 'Ell3', 'Akr7a5', 'Mtmr14', 'Timm44', 'Sf1', 'Ipp', 'Iah1', 'Trim23', 'Wdr89', 'Gstz1', 'Cradd', '2510006D16Rik',
                    'Fbxl6', 'LOC100044400', 'Zfp106', 'Cd55', '0610013E23Rik', 'Afmid', 'Tmem86a', 'Aldh6a1', 'Dalrd3', 'Smyd4',
                    'Nme7', 'Fars2', 'Tasp1', 'Cldn10', 'A930005H10Rik', 'Slc9a6', 'Adk', 'Rbks', '2210016F16Rik',
                    'Vwce', '4732435N03Rik', 'Zfp11', 'Vldlr', '9630013D21Rik', '4933407N01Rik', 'Fahd1', 'Mipol1', '1810019D21Rik',
                    '1810049H13Rik', 'Tfam', 'Paics', '1110032A03Rik', 'LOC100044139', 'Dnajc19', 'BC016495', 'A930041I02Rik', 'Rqcd1',
                    'Usp34', 'Zcchc3', 'H2afj', 'Phf7', '4921508D12Rik', 'Kmo', 'Prpf18', 'Mcat', 'Txndc4',
                    '4921530L18Rik', 'Vps13b', 'Scrn3', 'Tor1a', 'AI316807', 'Acbd4', 'Fah', 'Apool', 'Col4a4', 'Lrrc19',
                    'Gnmt', 'Nr3c1', 'Sip1', 'Ascc1', 'Fech', 'Abhd14a', 'Arhgap18', '2700046G09Rik', 'Yme1l1',
                    'Gk5', 'Glo1', 'Sbk1', 'Cisd1', '2210011C24Rik', 'Nxt2', 'Notum', 'Ankrd42', 'Ube2e1', 'Ndufv1',
                    'Slc33a1', 'Cep68', 'Rps6kb1', 'Hyi', 'Aldh1a3', 'Mynn', '3110048L19Rik', 'Rdh14',
                    'Proz', 'Gorasp1', 'LOC674449', 'Zfp775', '5430437P03Rik', 'Npy', 'Adh5', 'Sybl1', '4930432O21Rik',
                    'Nat9', 'LOC100048387', 'Mettl8', 'Eny2', '2410018G20Rik', 'Pgm2', 'Fgfr4', 'Mobkl2b',
                    'Atad3a', '4932432K03Rik', 'Dhtkd1', 'Ubox5', 'A530050D06Rik', 'Zdhhc5', 'Mgat1', 'Nudt6',
                    'Tpmt', 'Wbscr18', 'LOC100041586', 'Cdk5rap1', '4833426J09Rik', 'Myo6', 'Cpt1a', 'Gadd45gip1',
                    'Tmbim4', '2010309E21Rik', 'Asb9', '2610019F03Rik', '7530414M10Rik', 'Atp6v1b2', '2310068J16Rik', 'Ddt',
                    'Klhdc4', 'Hpn', 'Lifr', 'Ovol1', 'Nudt12', 'Cdan1', 'Fbxo9', 'Fbxl3', 'Hoxa7', 'Aldh8a1', '3110057O12Rik', 'Abhd11',
                    'Psmb1', 'ENSMUSG00000074286', 'Chpt1', 'Oxsm', '2310009A05Rik', '1700001L05Rik', 'Zfp148', '39509',
                    'Mrpl9', 'Tmem80', '9030420J04Rik', 'Naglu', 'Plscr2', 'Agbl3', 'Pex1', 'Cno',
                    'Neo1', 'Asf1a', 'Tnfsf5ip1', 'Pkig', 'AI931714', 'D130020L05Rik', 'Cntd1', 'Clec2h',
                    'Zkscan1', '1810044D09Rik', 'Mettl7a', 'Siae', 'Fbxo3', 'Fzd5', 'Tmem166', 'Tmed4',
                    'Gpr155', 'Rnf167', 'Sptlc1', 'Riok2', 'Tgds', 'Pms1', 'Pitpnc1', 'Pcsk7',
                    '4933403G14Rik', 'Ei24', 'Crebl2', 'Tln1', 'Mrpl35', '2700038C09Rik', 'Ubie', 'Osgepl1',
                    '2410166I05Rik', 'Wdr24', 'Ap4s1', 'Lrrc44', 'B3bp', 'Itfg1', 'Dmxl1', 'C1d'
                ].join('\n');
            };
            $scope.search = function() {
                console.log($scope.genes.split('\n'));

                var payload = {};
                $.ajax({
                    type: 'POST',
                    url: 'http://amp.pharm.mssm.edu/Enrichr/enrich',
                    crossDomain: true,
                    data: '{"some":"json"}',
                    dataType: 'json',
                    success: function(data) {
                        debugger;
                    }
                });
            }
        }],
        templateUrl: 'view/getting-started/enrichr.html'
    }
});

mod.directive('l2sBar', function() {
    return {
        restrict: 'AE',
        controller: ['$scope', '$http', function($scope, $http) {
            var url = 'http://amp.pharm.mssm.edu/Lich/';
            $scope.tags = [];
            $scope.loadTags = function(typed) {
                return $http.get(url + 'tags?typed=' + typed);
            };
            $scope.$watchCollection('tags', function(newVal, oldVal) {
                var tagString = $scope.tags.map(function(tag) {
                    return tag.text;
                }).join(',');
                $scope.lichSearchUrl = url + '#/search/' + tagString
            });
        }],
        templateUrl: 'view/getting-started/lich.html'
    }
});

mod.directive('harmonizomeBar', function() {
    return {
        restrict: 'AE',
        link: function(scope, element, attrs) {
            scope.searchTerm = '';
        },
        controller: ['$scope', '$http', function($scope, $http) {
            var BASE_URL = 'http://amp.pharm.mssm.edu/Harmonizome/',
                SEARCH_URL = BASE_URL + 'search?q=',
                SUGGEST_URL = BASE_URL + 'api/1.0/suggest?q=';
            $scope.search = function() {
                window.open(SEARCH_URL + $scope.searchTerm, '_blank');
            };
            $scope.entities = function(searchTerm) {
                console.log(searchTerm);
                return $http.get(SUGGEST_URL + searchTerm).then(function(response){
                    return response.data;
                });
            };
        }],
        templateUrl: 'view/getting-started/harmonizome.html'
    }
});