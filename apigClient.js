var apigClientFactory = {
    newClient: function(e) {
        var a = {};
        void 0 === e && (e = {
            accessKey: "",
            secretKey: "",
            sessionToken: "",
            region: "",
            apiKey: void 0,
            defaultContentType: "application/json",
            defaultAcceptType: "application/json"
        }),
        void 0 === e.accessKey && (e.accessKey = ""),
        void 0 === e.secretKey && (e.secretKey = ""),
        void 0 === e.apiKey && (e.apiKey = ""),
        void 0 === e.sessionToken && (e.sessionToken = ""),
        void 0 === e.region && (e.region = "us-east-1"),
        void 0 === e.defaultContentType && (e.defaultContentType = "application/json"),
        void 0 === e.defaultAcceptType && (e.defaultAcceptType = "application/json");
        var t = e.url;
        void 0 === e.url && (t = "https://uae4khqoag.execute-api.us-east-1.amazonaws.com/prod");
        var r = /(^https?:\/\/[^\/]+)/g.exec(t)[1]
          , s = t.substring(r.length)
          , i = {
            accessKey: e.accessKey,
            secretKey: e.secretKey,
            sessionToken: e.sessionToken,
            serviceName: "execute-api",
            region: e.region,
            endpoint: r,
            defaultContentType: e.defaultContentType,
            defaultAcceptType: e.defaultAcceptType
        }
          , o = "NONE";
        void 0 !== i.accessKey && "" !== i.accessKey && void 0 !== i.secretKey && "" !== i.secretKey && (o = "AWS_IAM");
        var p = {
            endpoint: r,
            defaultContentType: e.defaultContentType,
            defaultAcceptType: e.defaultAcceptType
        }
          , c = apiGateway.core.apiGatewayClientFactory.newClient(p, i);
        return a.addressGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain", "state", "city", "street_address_2", "street_address_1", "zip_code"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/address").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain", "state", "city", "street_address_2", "street_address_1", "zip_code"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.addressOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/address").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.affidavitGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["uuid"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/affidavit").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["uuid"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.affidavitOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/affidavit").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsPut = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "put".toUpperCase(),
                path: s + uritemplate("/claims").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsDeadlineGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/claims/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain"]),
                body: t
            };
            // return c.makeRequest(i, o, r, e.apiKey)
            return new Promise((rs,rv) => {rs({data:{
                "claim_deadline": "2025-10-16T06:59:59.000Z",
                "pacific_datetime": "October 15, 2025 at 11:59:59 P.M.",
                "eastern_datetime": "October 16, 2025 at 02:59:59 A.M."
            }})})
        }
        ,
        a.claimsDeadlineOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsEmailPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims/email").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsEmailOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/email").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsEnrollmentGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain", "first_name", "last_name"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/claims/enrollment").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain", "first_name", "last_name"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsEnrollmentOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/enrollment").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsFilesPut = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "put".toUpperCase(),
                path: s + uritemplate("/claims/files").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsFilesPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims/files").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsFilesOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/files").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsIpPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims/ip").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsIpOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/ip").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsPdfPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims/pdf").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsPdfOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/pdf").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsV2Post = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims/v2").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsV2Options = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/v2").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsV3Post = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims/v3").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsV3Options = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/v3").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsV4Post = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/claims/v4").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.claimsV4Options = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/claims/v4").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/classMember").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/classMember").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberMasterloginPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/classMember/masterlogin").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberMasterloginOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/classMember/masterlogin").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberRegisterPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/classMember/register").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberRegisterOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/classMember/register").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberSearchPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/classMember/search").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberSearchOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/classMember/search").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.consentPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/consent").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.classMemberSearchV2Post = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/classMember/search/v2").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.consentOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/consent").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.consentDeadlineGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/consent/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.consentDeadlineOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/consent/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.enquiryPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/enquiry").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.enquiryOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/enquiry").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.exclusionPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/exclusion").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.exclusionOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/exclusion").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.exclusionDeadlineGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/exclusion/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.exclusionDeadlineOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/exclusion/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.logPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/log").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.logOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/log").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/objection").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/objection").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionDeadlineGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/objection/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionDeadlineOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/objection/deadline").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionEmailPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/objection/email").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionEmailOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/objection/email").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionFilesPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/objection/files").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.objectionFilesOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/objection/files").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.optOutPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/optOut").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.optOutOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/optOut").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.otpGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["email_address", "domain", "authorizationToken"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/otp").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, ["authorizationToken"]),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["email_address", "domain"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.otpPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/otp").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.otpOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/otp").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.registeremailPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/registeremail").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.registeremailOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/registeremail").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.s3UploaderGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["type", "domain", "extension", "zero_zero_id", "index", "filename", "timestamp"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/s3Uploader").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["type", "domain", "extension", "zero_zero_id", "index", "filename", "timestamp"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.s3UploaderOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/s3Uploader").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.unsubscribePost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/unsubscribe").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.unsubscribeOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/unsubscribe").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.usersGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain", "lastname"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/users").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain", "lastname"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.usersPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["body"], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/users").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.usersOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/users").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.verifyGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["token"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/verify").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["token"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.verifyOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/verify").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.voucherGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["uuid", "domain"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/voucher").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["uuid", "domain"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.voucherOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/voucher").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.websiteGet = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, ["domain", "version"], ["body"]);
            var i = {
                verb: "get".toUpperCase(),
                path: s + uritemplate("/website").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, ["domain", "version"]),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.websiteOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/website").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.zendeskTicketPost = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "post".toUpperCase(),
                path: s + uritemplate("/ticket").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a.zendeskTicketOptions = function(a, t, r) {
            void 0 === r && (r = {}),
            apiGateway.core.utils.assertParametersDefined(a, [], ["body"]);
            var i = {
                verb: "options".toUpperCase(),
                path: s + uritemplate("/ticket").expand(apiGateway.core.utils.parseParametersToObject(a, [])),
                headers: apiGateway.core.utils.parseParametersToObject(a, []),
                queryParams: apiGateway.core.utils.parseParametersToObject(a, []),
                body: t
            };
            return c.makeRequest(i, o, r, e.apiKey)
        }
        ,
        a
    }
};
