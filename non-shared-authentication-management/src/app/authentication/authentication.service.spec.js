describe('Non Framework: Authentication Service', function() {
    var authenticationService;

    beforeEach(function() {
        module('non.framework.core.authentication');

        inject(function(_AuthenticationService_) {
            authenticationService = _AuthenticationService_;
        });
    });

    it('should be properly setup', function() {
        expect(authenticationService, 'Authentication service should be defined').to.not.be.null;
        expect(angular.isFunction(authenticationService.login), 'AuthenticationService should have a login function').to.be.true;
    });
});
