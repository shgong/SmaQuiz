

    angular.module('sitec', ['ngSanitize'])        // Module(name,dependency)
    .controller('Controller', ['$scope','$location','$http','$sce', function($scope,$location,$http,$sce) {
        var ct=this;   // this won't work in the http scope

        var currentset = [];

        $scope.number = 0;

        $scope.setnum = "";

        $scope.testurl ="choose";

        $scope.question="Loading";
        $scope.answers="";

        $scope.answered = -1;
        $scope.answer0=0;


        $scope.correct = 0;
        $scope.total = 0;

        var MobileRedirect = function(){
                if($('#mobile-list').hasClass('in'))
                    $('#mobile-list').collapse('hide'); //hide when selected in mobile
        };

        $scope.SetTestSet=function(url){

            if (url=="") url="choose";
            $scope.testurl = url;



            $http({
                method:'GET',
                url:'/set/'+$scope.testurl+'.md'
            }).then(function(res){
                MobileRedirect();
                currentset =  marked(res.data).split('<q-->');
                $scope.number=-1;
                $scope.NextQuestion();
            },function(res){
                $scope.question="";
                $scope.answers="";
                $scope.testurl = "choose";
            });
        };



        $scope.SetQuestion=function(){
            if(currentset.length>1)
            if(Number.parseInt($scope.setnum))
            {
                MobileRedirect();
                $scope.number=Number.parseInt($scope.setnum)-2;
                $scope.NextQuestion();
                $scope.setnum="";
            }
        };

        $scope.NextQuestion=function(){
            if($scope.number+1<currentset.length){
                $scope.number+=1;
                var htmls = currentset[$scope.number].split('<a-->');

                $scope.answered = -1;
                $scope.question = $sce.trustAsHtml(htmls[0]);
                $scope.answers = [];

                for(i=1,x=htmls.length;i<x;i++){
                    $scope.answers.push($sce.trustAsHtml(htmls[i]));
                }
                if ($scope.answers.length>0)
                {
                var temp = $scope.answers.shift();

                    if ($scope.answers.length>0)
                    {
                        var temp2 = $scope.answers.shift();
                        var random = Math.floor(Math.random() * ($scope.answers.length + 1));
                        $scope.answers.splice(random,0,temp2);
                    }

                $scope.answer0 = Math.floor(Math.random() * ($scope.answers.length + 1));
                $scope.answers.splice($scope.answer0,0,temp);
                }
            }
            else{
                location.href = "#/finished";
            }
        };


        $scope.SubmitAnswer=function(choice){

            if($scope.answers.length==1){
                $scope.NextQuestion();
            }
            else if($scope.answered==-1){
                $scope.total+=1;
                $scope.answered = choice;
                if(choice==$scope.answer0){
                    $scope.correct+=1;
                }
            }
            else if($scope.answer0==choice){
                $scope.NextQuestion();
            }

        };

        $scope.ResetStats=function(){
            $scope.total=0;
            $scope.correct=0;
        };




        $scope.$watch(
            function(){
                return $location.absUrl();
            },
            function(value){
                $scope.SetTestSet(value.split('#/')[1]);
            }
        );

        if($location.absUrl().indexOf('#/')==-1) location.href = "#/choose";
        else{
            $scope.SetTestSet($location.absUrl().split('#/')[1]);
        }


    }])

    ;


//})();
