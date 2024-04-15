package middleware

import (
	"net/http"
	"portfolio/helpers"
	token "portfolio/tokens"

	"github.com/gin-gonic/gin"
)

func Authentication(ctx *gin.Context) {
	clientToken := ctx.Request.Header.Get("token")
	if clientToken == "" {
		helpers.ErrJSONResponse(ctx, http.StatusUnauthorized, "No Authorization")
		ctx.Abort()
		return
	}

	claims, err := token.ValidateToken(clientToken)
	if err != "" {
		helpers.ErrJSONResponse(ctx, http.StatusUnauthorized, err)
		ctx.Abort()
		return
	}

	ctx.Set("email", claims.Email)
	ctx.Set("uid", claims.Uid)
	ctx.Next()
}
