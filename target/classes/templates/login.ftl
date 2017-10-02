<div class="panel panel-default">
        <!-- Default panel contents -->
        <div class="panel-heading"><span class="lead">Login </span></div>
		<div class="panel-body">
	        <div class="formcontainer">
	            <!--<div class="alert alert-success" role="alert" ng-if="ctrl.successMessage">{{ctrl.successMessage}}</div>-->
	            <div class="alert alert-danger" role="alert" ng-if="ctrl.errorMessage">{{ctrl.errorMessage}}</div>
	            <form ng-submit="lctrl.submit()" name="loginForm" class="form-horizontal">
	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="username">User Name</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="lctrl.login.username" id="username" class="username form-control input-sm" placeholder="Enter your username" required/>
	                        </div>
	                    </div>
	                </div>

	                <div class="row">
	                    <div class="form-group col-md-12">
	                        <label class="col-md-2 control-lable" for="password">Password</label>
	                        <div class="col-md-7">
	                            <input type="text" ng-model="lctrl.login.password" id="password" class="form-control input-sm" placeholder="Enter your Password." required/>
	                        </div>
	                    </div>
	                </div>
	
	                

	                <div class="row">
	                    <div class="form-actions floatRight">
	                        <input type="submit"  value="submit" class="btn btn-primary btn-sm">
	                    </div>
	                </div>
	            </form>
    	    </div>
		</div>	
    </div>