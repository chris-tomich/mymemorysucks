function CheckPermissions(req, res, next) {
    /// Check to see if we can login anonymously as this would mean we don't need a user anyway
    permissionsService.anonymousUserHasAccess(req.requestedInfo,
        function () {
            /// If the anonymous is allowed then continue
            next();
        },
        function () {
            /// If there is no anonymous access, we need to check if the current user has access
            if (req.user) {
                /// If there is a user object, check whether the user has access
                permissionsService.userHasAccess(req.user, req.requestedInfo, function () {
                    next();
                }, function () {
                    /// There is no user object so we need to request the person to login
                    res.redirect("/auth/login")
                });
            }
    });
}